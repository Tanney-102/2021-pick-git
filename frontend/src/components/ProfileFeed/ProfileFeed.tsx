import { Link } from "react-router-dom";
import { useUserPostsQuery } from "../../services/queries";
import { GridContainer, GridItem } from "./ProfileFeed.styled";

export interface Props {
  isMyFeed: boolean;
  userName: string | null;
}

const ProfileFeed = ({ isMyFeed, userName }: Props) => {
  const { data, isLoading, error } = useUserPostsQuery(isMyFeed, userName);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>피드를 가져올 수 없습니다.</div>;
  }

  return (
    <GridContainer>
      {data?.map(({ postId, imageUrls, authorName, content }) => (
        <Link to="" key={postId}>
          <GridItem imageUrl={imageUrls[0]} aria-label={`${authorName}님의 게시물. ${content}`} />
        </Link>
      ))}
    </GridContainer>
  );
};

export default ProfileFeed;