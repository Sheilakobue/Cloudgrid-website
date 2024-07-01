"use client";

import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  useToast,
  Text,
} from "@chakra-ui/react";
import PostMethod from '../util/post-method'
import { useRouter } from "next/navigation";

const initValues = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  message: "",
};

const initState = { values: initValues, isLoading: false, error: "" };

export default function ContactForm() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const router = useRouter()

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
  setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    },
  }));

  const onSubmit = async () => {
    try {
      const res = await PostMethod('/api/mail', state.values)
      if(res.message == 'success'){
        console.log('hello world')
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container mt={12}>
      <FormControl isRequired isInvalid={touched.fullName && !values.fullName} mb={10}>
        <Input
          placeholder='full Name'
          type="text"
          name="fullName"
          errorBorderColor="red.300"
          value={values.fullName}
          onChange={handleChange}
          onBlur={onBlur}
          padding={15}
          borderRadius={5}
          fontSize={15}
          color={'gray'}
          width='100%'
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.companyName && !values.companyName} mb={10}>
        <Input
          placeholder="Company Name"
          type="text"
          name="companyName"
          errorBorderColor="red.300"
          value={values.companyName}
          onChange={handleChange}
          onBlur={onBlur}
          padding={15}
          borderRadius={5}
          fontSize={15}
          color={'gray'}
          width='100%'
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={10}>

        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          errorBorderColor="red.300"
          onChange={handleChange}
          onBlur={onBlur}
          padding={15}
          borderRadius={5}
          fontSize={15}
          color={'gray'}
          width='100%'
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.phone && !values.phone} mb={10}>
        <Input
          type="tel"
          name="phone"
          value={values.phone}
          errorBorderColor="red.300"
          onChange={handleChange}
          onBlur={onBlur}
          placeholder="Phone"
          padding={15}
          borderRadius={5}
          fontSize={15}
          color={'gray'}
          width='100%'
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.message && !values.message} mb={10}>
        <Textarea
          name="message"
          rows={4}
          value={values.message}
          errorBorderColor="red.300"
          onChange={handleChange}
          onBlur={onBlur}
          placeholder="Message"
          padding={15}
          borderRadius={5}
          fontSize={15}
          color={'gray'}
          width='100%'
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      {error && (
        <Text color="red.500" mb={4}>
          {error}
        </Text>
      )}

      <Button
        // variant="outline"
        isLoading={isLoading}
        onClick={onSubmit}
        colorScheme='teal'
        style={{ backgroundColor: 'blue', padding: '10px', width:'130px',
          borderRadius:'5px', 
        }}
      >
        Submit
      </Button>
      
    </Container>
  );
}
