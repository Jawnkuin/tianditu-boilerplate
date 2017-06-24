import React from 'react';
import Example from './Example';

// 模拟数据
const mockData = {
  company: '福建经纬测绘',
  employees: 100
};

// 把内部处理的数据暴露给外面
const alertEmployee = (number) => {
  console.log(number);
};

// 模拟数据赋值给组件对应的property
export default () => (
  <Example
    company={mockData.company}
    employees={mockData.employees}
    showEmployee={alertEmployee}
  />
);
