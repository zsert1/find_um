import Axios from 'axios';
import React, {useEffect, useState} from 'react';
const SingUp = () => {
  const [input, setInput] = useState({username: '', password: ''});
  const [err, setErr] = useState({username: '', password: ''});
  const [submitDisable, setSubmitDisable] = useState(true);
  const [loading, setLoading] = useState(true);

  const onSubmit = e => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    Axios.post('http://127.0.0.1:8000/account/singup/', input)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        if (err.response) {
          setErr({
            username: (err.response.data.username || []).join(''),
            password: (err.response.data.password || []).join(''),
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    const isDisable = input.username.length === 0 || input.password.length === 0;
    setSubmitDisable(isDisable);
  }, [input]);
  const onChange = e => {
    const {name, value} = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" name="username" onChange={onChange} />
          {err?.username}
        </div>
        <div>
          <input type="password" name="password" onChange={onChange} />
          {err?.password}
          {}
        </div>
        <input type="submit" value="회원가입" disabled={loading || submitDisable} />
      </form>
    </div>
  );
};
export default SingUp;
