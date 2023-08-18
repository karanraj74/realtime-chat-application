import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import React from "react";

const Signup = () => {
    return <VStack spacing="5px">
        <FormControl>
            <FormLabel>
                <Input
                placeholder="Enter Your Name"
                // onChange={}
                />
            </FormLabel>
      </FormControl>
  </VStack>;
};

export default Signup;
