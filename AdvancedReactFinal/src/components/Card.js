import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <VStack class="project_card">
    <Image src={imageSrc} alt="project image" class="project_img"></Image>
    <Heading size="xs">{title}</Heading>
    <Text class="project_description">{description}</Text>
    <HStack>
      <Text>See more</Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </HStack>

  </VStack>;
};

export default Card;
