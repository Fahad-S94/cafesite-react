import { selectMenuByCategory } from "./menuSlice";
import { useSelector } from "react-redux";

const MenuTabs = () => {
    const items = useSelector(selectMenuByCategory(state))

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

  return (

    <animated.div style={animatedStyle}>
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    </animated.div>
  );
};
