import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSceleton = () => {
  return (
    <Card height={"300px"}>
      <Skeleton height={"60%"}>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
      ;
    </Card>
  );
};
