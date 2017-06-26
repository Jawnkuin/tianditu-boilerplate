import React from 'react';
import styles from './ThematicContent.less';

const ThematicContent = () => (
  <div className={styles.ThematicContent}>
    <div id={'contentTitle'} className='flex-box'>
      <h2>多规合一业务协同平台</h2>
    </div>
    <div id='contentArticle'>
      <img
        alt='newimg'
        src='http://map.xmtfj.gov.cn/Portal/preview?reqtype=getAppPreview&appid=380'
      />
      <p>
        {
          `厦门市“多规合一”业务协同平台运行于政务内网，基于数字厦门地理空间框架的建设成果，实现 “三规”相关部门
          间信息共享与交换，支撑全市建设项目并联审批流程改革，辅助多规合一相关的空间查询分析与规划决策工作，推
          动行政机构改革.`
        }
      </p>
    </div>
  </div>
);


export default ThematicContent;
