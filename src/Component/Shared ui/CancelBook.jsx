"use client";
import {AlertDialog, Button} from "@heroui/react";
// import { revalidatePath } from "next/cache";
const CancelBook = ({bookingID}) => {
    const handleDelete = async() => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/booking/${bookingID}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        console.log('Delete Response:', data);
        if(data.deletedCount > 0){
             window.location.reload();
        }

    
      }
    return (
       <AlertDialog >
   <Button className="px-5 py-4 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 text-sm ">
                      Delete Booking
                    </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default CancelBook;