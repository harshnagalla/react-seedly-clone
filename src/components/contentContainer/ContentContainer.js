import Facade from "./facade/Facade";
import Content from "./Content";

const ContentContainer = () => {
  return (
    <div>
      <Facade
        headerText={"Let's Talk Finance"}
        secondaryHeaderText={
          "Ask for opinions and get answers from other Singaporeans"
        }
        buttonText={"Ask Question"}
      />

      <Content />
    </div>
  );
};
export default ContentContainer;
