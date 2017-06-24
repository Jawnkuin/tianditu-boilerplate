import React, {Component, PropTypes} from 'react';
import {Button, Alert} from 'antd';  // 引入antd的组件
import styles from './Example.less'; // 引入样式表

class Example extends Component {

  // 声明传入的property的类型和是否必须
  static propTypes = {
    company: PropTypes.string.isRequired,
    employees: PropTypes.number.isRequired,
    showEmployee: PropTypes.func.isRequired
  }
  // 构造函数， 初始化组件状态(state)
  constructor (props) {
    super(props);
    this.state = {
      // 当前员工数量，由外面的PropType来初始化
      curEmployees: props.employees
    };
  }

  // 自定义函数 修改state添加员工
  handleAddEmployee () {
    this.setState(
      {curEmployees: this.state.curEmployees + 1}
    );
  }

  // 由render函数来输出整个控件结构
  // 设置元素对应的值用 attr={value}
  // 绑定事件尽量用{() => this.handleFunc()}的形式
  // 如果需要组件内某个值传出去,在props中添加一个函数：handleOutput(outputvalue)，在对应的地方调用
  render () {
    return (
      <div className={styles.maindiv}>
        <Alert message={this.props.company} type="success" />
        <p className={styles.company}>{this.state.curEmployees}</p>
        <div className={styles.handles}>
          <Button shape="circle" icon="up-circle" onClick={() => this.handleAddEmployee()} />
          <Button
            type="primary"
            icon="search"
            onClick={() => this.props.showEmployee(this.state.curEmployees)}
          >
            Show
          </Button>
        </div>
      </div>
    );
  }
}


export default Example;
