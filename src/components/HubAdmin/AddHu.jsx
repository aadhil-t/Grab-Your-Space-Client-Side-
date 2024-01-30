import { Card, Input, Button, Typography } from "@material-tailwind/react";

 function AddHu() {
  return (
    <div className="flex justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Create your Hub
        </Typography>
        <Typography
          className="mb-3 font-normal"
          variant="paragraph"
          color="gray"
        >
          Enter your Hub details.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography className="-mb-2" variant="h6">
              Hub Owner Name
            </Typography>
            <Input
              label="Name"  
              size="lg"
              name="name"
              // onChange={handleChange}
              // value={values.name}
            />
            {/* {touched.name && errors.name && (
                <div className="text-red-500 text-sm">{errors.name}</div>
            )} */}

            <Typography className="-mb-2" variant="h6">
              Hub Owner Email
            </Typography>
            <Input
              label="Email"
              size="lg"
              name="email"
              // onChange={handleChange}
              // value={values.email}
            />
            {/* {touched.email && errors.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
            )} */}
            <Typography className="-mb-2" variant="h6">
              Hub Owner Contact
            </Typography>
            <Input
              label="Contact"
              size="lg"
              name="mobile"
              // onChange={handleChange}
              // value={values.mobile}
            />
            {/* {touched.mobile && errors.mobile && (
                <div className="text-red-500 text-sm">{errors.mobile}</div>
            )} */}
            <Typography className="-mb-2" variant="h6">
              Hub Location
            </Typography>
            <div className="w-72">
              <select
                name="location"
                //  onChange={handleChange}
                //  value={values.location}
                className="border rounded w-full py-2 px-3"
              >
                <option value="">Select Location</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Calicut">Calicut</option>
                <option value="Kochi">Kochi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Kannur">Kannur</option>
              </select>
            </div>
            {/* {touched.location && errors.location && (
                 <div className="text-red-500 text-sm">{errors.location}</div>
               )} */}

            <Typography className="-mb-2" variant="h6">
              Seat Count
            </Typography>
            <Input
              label="Count"
              size="lg"
              name="seatcount"
              // onChange={handleChange}
              // value={values.seatcount}
            />
            {/* {touched.seatcount && errors.seatcount && (
                      <div className="text-red-500 text-sm">{errors.seatcount}</div> */}
            {/* )} */}
          </div>

          <Button className="mt-6" fullWidth>
            submit
          </Button>
        </form>
      </Card>
    </div>
  );
}
export default AddHu