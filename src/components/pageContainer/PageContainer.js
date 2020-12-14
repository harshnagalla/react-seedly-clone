import PageHeader from "../pageHeader/PageHeader";
import ContentContainer from "../contentContainer/ContentContainer";

const PageContainer = ({ topics }) => {
  return (
    <div>
      {/* Header  */}
      <PageHeader />
      <ContentContainer topics={topics} />
      {/* <Home/>   */}
    </div>
  );
};

export default PageContainer;
