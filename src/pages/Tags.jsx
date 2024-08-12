import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';

import 'react-tagsinput/react-tagsinput.css';

const Tags = () => {
  const [tags, setTags] = useState([]);

  const handleChange = (newTags) => {
    setTags(newTags);
  };

  return <TagsInput value={tags} onChange={handleChange} />;
};

export default Tags;