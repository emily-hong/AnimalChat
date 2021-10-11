import Posts from '../components/Posts'

export default function Boards({ boardName, mockBgColorPost }) {
  return (
    <div className="boards">
      <Posts mockBgColorPost={'#907FA4'} />
    </div>
  );
}