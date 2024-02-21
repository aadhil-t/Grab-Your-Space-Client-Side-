import React from 'react'
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { HubApprovalChange } from '../../Api/AdminApi';

function HubApprovalModal({data,fn}) {
    const { hubname, hublocation, hubemail, price, hubmobile, certificate }=data

//////////////// Modal Handling //////////////
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

//////////////// SEND CONFIRMATION  //////////////
        const SendToApi = async()=>{
            try {
            const Data = data
           
            const response = await HubApprovalChange({Data});
                if(response){
                    console.log(response,"Approved response reached")
                    fn(true)
                    handleOpen()
                }else{
                    console.log("Error occured")
                }
            } catch (error) {
                
            }
      }
  return (
    <div>
                    <Button onClick={handleOpen}>view</Button>
       <Dialog open={open} handler={handleOpen}>
                      <DialogHeader className="font-extrabold flex justify-center">HUB APPROVAL</DialogHeader>
                      <DialogBody className="h-[42rem] ">
                        <div className="">
                          <Typography className="font-normal mb-3">
                            <span className="font-bold text-black">
                              Hub Name:{" "}
                            </span>
                            {hubname}
                          </Typography>
                          <Typography className="font-normal mb-3">
                            <span className="font-bold text-black">
                              Hub Location:{" "}
                            </span>
                            {hublocation}
                          </Typography>
                          <Typography className="font-normal mb-3">
                            <span className="font-bold text-black">
                              Hub Mobile:{" "}
                            </span>
                            {hubmobile}
                          </Typography>
                          <Typography className="font-normal mb-3">
                            <span className="font-bold text-black">
                              Hub Email:{" "}
                            </span>
                            {hubemail}
                          </Typography>
                          <Typography className="font-normal mb-3">
                            <span className="font-bold text-black">
                              Hub price:{" "}
                            </span>
                            {price}
                          </Typography>
                          <img src={certificate} alt=""/>
                        </div>
                      </DialogBody>
                      <DialogFooter className="space-x-2">
                        <Button
                          variant="text"
                          color="blue-gray"
                          onClick={handleOpen}
                        >
                          cancel
                        </Button>
                        <Button
                          variant="gradient"
                          color="green"
                            onClick={SendToApi}
                        >
                          confirm
                        </Button>
                      </DialogFooter>
                    </Dialog>
    </div>
  )
}

export default HubApprovalModal
