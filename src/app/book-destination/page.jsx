import { FieldError, Input, Label, TextField,Select, ListBox, TextArea, Button } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';

const BookDestination = () => {
  const formAction = async (formData) => {

    'use server';
    const fromInfo = Object.fromEntries(formData.entries());
    console.log('Form Data:', fromInfo);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/destination`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fromInfo),
    });
    const data = await res.json();
    if(data.insertedId){
      redirect('/destinations');
    }


    console.log('Response:', data);

    return data;
    // Here you can handle the form data, e.g., save it to a database or send it to an API
  }
    return (
        <div  >
            <form
         action={formAction}
            className="p-10 space-y-8  lg:w-10/12 mx-auto bg-white/10 backdrop-blur-xl  border-[#c2cab2]/10 rounded-3xl my-3"
          >
            <div className='text-center  '>
            <h1 className="text-3xl font-bold text-white ">Add New Destination</h1>
            <p className="text-white ">Fill in the details below to add a new destination!</p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2  text-white">
                <TextField name="destinationName" isRequired>
                  <Label className='text-white'>Destination Name</Label>
                  <Input placeholder="Bali Paradise" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="country" isRequired>
                <Label className='text-white'>Country</Label>
                <Input placeholder="Indonesia" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label className='text-white'>Category</Label>
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
              <TextField name="priceUSD" type="number" isRequired>
                <Label className='text-white'>Price (USD)</Label>
                <Input
                  type="number"
                  placeholder="1299"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              <TextField name="duration" isRequired>
                <Label className='text-white'>Duration</Label>
                <Input
                  placeholder="7 Days / 6 Nights"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="departureDate" type="date" isRequired>
                  <Label className='text-white'>Departure Date</Label>
                  <Input type="date" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageURL" isRequired>
                  <Label className='text-white'>Image URL</Label>
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
                <TextField name="description" isRequired>
                  <Label className='text-white'>Description</Label>
                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="secodary"
              className=" rounded-lg w-full bg-[#F59E0B] text-white"
            >
             Add Travel Package
            </Button>
          </form>
        </div>
    );
};

export default BookDestination;