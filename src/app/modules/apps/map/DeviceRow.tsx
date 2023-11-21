import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import makeStyles from '@mui/styles/makeStyles';
import {
  IconButton, Tooltip, Avatar, ListItemAvatar, ListItemText, ListItemButton,
} from '@mui/material';
import moment from 'moment';
import { ReactComponent as EngineIcon } from '../../../../_metronic/helpers/resources/images/data/engine.svg';
import { useTranslation } from '../../../../_metronic/helpers/common/components/LocalizationProvider';
import { useAttributePreference } from '../../../../_metronic/helpers/common/util/preferences';
import { formatBoolean, formatStatus, getStatusColor } from '../../../../_metronic/helpers/common/util/formatter';
import { useAdministrator } from '../../../../_metronic/helpers/common/util/permissions';
import { devicesActions } from '../../../../store';
import { mapIconKey, mapIcons } from './core/preloadImages';
import {
  amber, grey, green, indigo, red, common,
} from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
  icon: {
    width: '25px',
    height: '25px',
    filter: 'brightness(0) invert(1)',
  },
  batteryText: {
    fontSize: '0.75rem',
    fontWeight: 'normal',
    lineHeight: '0.875rem',
  },
  positive: {
    color: green[500],
  },
  medium: {
    color: amber[700],
  },
  negative: {
    color:  red[500],
  },
  neutral: {
    color: grey[500],
  },
}));

const DeviceRow = ({ item, index }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const t = useTranslation();

  const admin = useAdministrator();

  const position = useSelector((state:any) => state?.session?.positions[item.id]);

  const geofences = useSelector((state:any) => state?.geofences?.items);

  const devicePrimary = useAttributePreference('devicePrimary', 'name');
  const deviceSecondary = useAttributePreference('deviceSecondary', '');

  const formatProperty = (key) => {
    if (key === 'geofenceIds') {
      const geofenceIds = item[key] || [];
      return geofenceIds
        .filter((id) => geofences.hasOwnProperty(id))
        .map((id) => geofences[id].name)
        .join(', ');
    }
    return item[key];
  };

  const secondaryText = () => {
    let status;
    if (item.status === 'online' || !item.lastUpdate) {
      status = formatStatus(item.status, t);
    } else {
      status = moment(item.lastUpdate).fromNow();
    }
    return (
      <>
        {deviceSecondary && item[deviceSecondary] && `${formatProperty(deviceSecondary)} • `}
        <span className={classes[getStatusColor(item.status)]}>{status}</span>
      </>
    );
  };

  return (
    <div>
      <ListItemButton
        key={item.id}
        onClick={() => dispatch(devicesActions.selectId(item.id))}
        disabled={!admin && item.disabled}
      >
        <ListItemAvatar>
          <Avatar>
            <img className={classes.icon} src={mapIcons[mapIconKey(item.category)]} alt="" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={formatProperty(devicePrimary)}
          primaryTypographyProps={{ noWrap: true }}
          secondary={secondaryText()}
          secondaryTypographyProps={{ noWrap: true }}
        />
        {position && (
          <>
            {position.attributes.hasOwnProperty('ignition') && (
              <Tooltip title={`${t('positionIgnition')}: ${formatBoolean(position.attributes.ignition, t)}`}>
                <IconButton size="small">
                  {position.attributes.ignition ? (
                    <EngineIcon width={20} height={20} className={classes.positive} />
                  ) : (
                    <EngineIcon width={20} height={20} className={classes.neutral} />
                  )}
                </IconButton>
              </Tooltip>
            )}
          </>
        )}
      </ListItemButton>
    </div>
  );
};

export default DeviceRow;
