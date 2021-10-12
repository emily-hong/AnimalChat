import Posts from "../components/Posts"

export default function Boards({ boardName, mockBgColorPost, postList }) {
  return (
    <div className="boards">
      <Posts postList={postList} mockBgColorPost={"#907FA4"} />
    </div>
  )
}
