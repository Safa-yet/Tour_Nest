
import { updateApi } from "@/lib/GetApi";
import {Button, FieldError, Input, Label, Modal, Surface, TextArea, TextField,Select, ListBox} from "@heroui/react";


import ModalBtn from "./ModalBtn";

const MagneticButton = ({data}) => {
          const { _id, destinationName, description, imageURL, priceUSD, category, duration, country, departureDate } = data;
  

  const formAction = async (formData) => {
    'use server';

    console.log(formData);

    // console.log(formData);
    return await updateApi(_id,formData);
  
  };

  return (
    <>
     <Modal>
       <ModalBtn></ModalBtn>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-w-5xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft">
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                 <form
                         action={formAction}
                            className="p-10 space-y-8  w-full mx-auto bg-white/10 backdrop-blur-xl  border-[#c2cab2]/10 rounded-3xl my-3"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {/* Destination Name */}
                              <div className="md:col-span-2 ">
                                <TextField name="destinationName" isRequired defaultValue={destinationName}>
                                  <Label >Destination Name</Label>
                                  <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              {/* Country */}
                              <TextField name="country" isRequired defaultValue={country}>
                                <Label >Country</Label>
                                <Input placeholder="Indonesia" className="rounded-2xl" />
                                <FieldError />
                              </TextField>
                
                              {/* Category - Updated Select Component */}
                              <div>
                                <Select
                                  name="category"
                                  isRequired
                                  className="w-full"
                                  placeholder="Select category" defaultValue={category}
                                >
                                  <Label >Category</Label>
                                  <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                  </Select.Trigger>
                                  <Select.Popover>
                                    <ListBox>
                                      <ListBox.Item id="Beach" textValue="Beach">
                                        Beach
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Mountain" textValue="Mountain">
                                        Mountain
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="City" textValue="City">
                                        City
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Adventure" textValue="Adventure">
                                        Adventure
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Cultural" textValue="Cultural">
                                        Cultural
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Luxury" textValue="Luxury">
                                        Luxury
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                    </ListBox>
                                  </Select.Popover>
                                </Select>
                              </div>
                
                              {/* Price */}
                              <TextField name="priceUSD" type="number" isRequired defaultValue={priceUSD}>
                                <Label >Price (USD)</Label>
                                <Input
                                  type="number"
                                  placeholder="1299"
                                  className="rounded-2xl"
                                />
                                <FieldError />
                              </TextField>
                
                              {/* Duration */}
                              <TextField name="duration" isRequired defaultValue={duration}>
                                <Label >Duration</Label>
                                <Input
                                  placeholder="7 Days / 6 Nights"
                                  className="rounded-2xl"
                                />
                                <FieldError />
                              </TextField>
                
                              {/* Departure Date */}
                              <div className="md:col-span-2">
                                <TextField name="departureDate" type="date" isRequired defaultValue={departureDate}>
                                  <Label >Departure Date</Label>
                                  <Input type="date" className="rounded-2xl" />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              {/* Image URL - Removed preview */}
                              <div className="md:col-span-2">
                                <TextField name="imageURL" isRequired defaultValue={imageURL}>
                                  <Label>Image URL</Label>
                                  <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-2xl"
                                  />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              {/* Description */}
                              <div className="md:col-span-2">
                                <TextField name="description" isRequired defaultValue={description}>
                                  <Label >Description</Label>
                                  <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-3xl"
                                  />
                                  <FieldError />
                                </TextField>
                              </div>
                            </div>
                
                            {/* Buttons */}
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit"
                              variant="secodary"
                              className=" rounded-lg  bg-[#F59E0B]">Update</Button>
            </Modal.Footer>
                          </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal></>
  
  );
};

export default MagneticButton;