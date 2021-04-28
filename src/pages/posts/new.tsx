import { useState } from 'react';
import BgTextEditor from 'src/components/organisms/bg-text-editor';
import BgAdminTemplate from 'src/components/templates/bg-admin-template';

const CreatePostPage: React.VFC = () => {
  const [newPostBody, setNewPostBody] = useState('');

  return (
    <BgAdminTemplate>
      New
      <BgTextEditor text={newPostBody} setText={setNewPostBody} />
      {newPostBody}
    </BgAdminTemplate>
  );
};

export default CreatePostPage;
