import "./App.css";
import { Button, ConfigProvider, Typography } from "antd";

const clientA = {
  primaryColor: "#28B56F",
  infoColor: "#faad14",
  errorColor: "red",
};

const clientB = {
  primaryColor: "#125288",
  infoColor: "#89CC67",
  errorColor: "#FF0000",
};

ConfigProvider.config({
  theme: clientA,
});

function App() {
  return (
    <div className="App">
      <ConfigProvider>
        <Button type="primary">Test Button</Button>
        <Typography.Text type="danger">Typography</Typography.Text>
      </ConfigProvider>
    </div>
  );
}

export default App;
