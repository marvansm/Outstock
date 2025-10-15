import Cards from "../../Common/Cards";
import HeadingText from "../../Common/Heading";

const TrendsSection = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-[10px] ">
      <HeadingText
        title={"Trending Products"}
        desc={
          "Mirum est notare quam littera gothica quam nunc putamus parum claram!"
        }
      />
      <div className="grid grid-cols-4">
        <Cards />
      </div>
    </div>
  );
};

export default TrendsSection;
