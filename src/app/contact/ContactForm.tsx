"use client";

import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
  Text, // Make sure to import Text here
} from "@chakra-ui/react";
import { sendContactForm } from "../../../lib/api"; // Ensure this path is correct

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
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
      toast({
        title: "Failed to send message.",
        description: error.message,
        status: "error",
        duration: 2000,
        position: "top",
      });
    }
  };

  return (
    <Container maxW="450px" mt={12}>
      <FormControl isRequired isInvalid={touched.fullName && !values.fullName} mb={10}>
        <FormLabel>Full Name</FormLabel>
        <Input
          type="text"
          name="fullName"
          minLength={5}
          maxLength={150}
          errorBorderColor="red.300"
          value={values.fullName}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.companyName && !values.companyName} mb={10}>
        <FormLabel>Company Name</FormLabel>
        <Input
          type="text"
          minLength={5}
          maxLength={150}
          name="companyName"
          errorBorderColor="red.300"
          value={values.companyName}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={10}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          minLength={5}
          maxLength={150}
          value={values.email}
          errorBorderColor="red.300"
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.phone && !values.phone} mb={10}>
        <FormLabel>Phone</FormLabel>
        <Input
          type="tel"
          name="phone"
          value={values.phone}
          errorBorderColor="red.300"
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.message && !values.message} mb={10}>
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          minLength={10}
          maxLength={500}
          rows={4}
          value={values.message}
          errorBorderColor="red.300"
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      {error && (
        <Text color="red.500" mb={4}>
          {error}
        </Text>
      )}

      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !values.fullName ||
          !values.companyName ||
          !values.email ||
          !values.phone ||
          !values.message
        }
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Container>
  );
}
