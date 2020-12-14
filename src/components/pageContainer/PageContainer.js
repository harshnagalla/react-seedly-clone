import PageHeader from "../pageHeader/PageHeader";
import ContentContainer from "../contentContainer/ContentContainer";

const PageContainer = () => {
  return (
    <div>
      <PageHeader />
      <ContentContainer topics={topics} />
    </div>
  );
};

export default PageContainer;
