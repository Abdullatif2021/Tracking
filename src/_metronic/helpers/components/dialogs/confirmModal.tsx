import React, { useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const DeleteConfirmation = ({ showModal, hideModal ,callBack }) => {
    useEffect(() => {
        if (showModal) {
            Swal.fire({
                title: 'Are you sure?',
                text: 'Once deleted, you will not be able to recover this file!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
              }).then((result) => {
                if (result.isConfirmed) {
                      callBack()
                // Swal.fire({
                //     title: 'Confirmed!',
                //     text: 'You clicked the confirm button.',
                //     icon: 'success',
                //     confirmButtonText: 'OK'
                //   });
                }
                else{
                    hideModal()
                }
              });
        }
      }, [showModal]);
    
      return null;
};

export default DeleteConfirmation;