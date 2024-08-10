import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
const AppNotfound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to={"home"}><Button type="primary">Back Home</Button></Link>}
  />
);
export default AppNotfound;
