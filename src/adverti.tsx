import React from 'react';

const Adverti: React.FC = () => {
  return (
<ul className="c-accordion">
<li
className="c-accordion__item"
style={{ '--cover': 'url(https://fusion-universal-assets-production.s3.amazonaws.com/file-host/5af42070-0533-49eb-9822-934eebf32cb7--1399798036194765884-/8/Customer-facing-1.png)' } as React.CSSProperties}
>

<a href="#cf" className="c-accordion__action">
<div className="c-accordion__content">
<h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">装修/干活</h2>
<p className="c-accordion__description">以合作者身份加入开始接单 ....</p>
</div>
<div className="c-accordion__aside">
<h2 className="c-accordion__title c-accordion__title--hover-hide">Corporate with us</h2>
</div>
</a>
</li>
<li id="corp" className="c-accordion__item" style={{ '--cover': 'url(https://fusion-universal-assets-production.s3.amazonaws.com/file-host/5af42070-0533-49eb-9822-934eebf32cb7--1399798036194765884-/8/corporate-3.png)' } as React.CSSProperties}>
<a href="#corp" className="c-accordion__action">
<div className="c-accordion__content">
<h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">Business</h2>
<p className="c-accordion__description">
需要帮助
</p>
</div>
<div className="c-accordion__aside">
<h2 className="c-accordion__title c-accordion__title--hover-hide">CORPORATE</h2>
</div>
</a>
</li>
<li id="lead" className="c-accordion__item" style={{ '--cover': 'url(https://fusion-universal-assets-production.s3.amazonaws.com/file-host/5af42070-0533-49eb-9822-934eebf32cb7--1399798036194765884-/8/Leadership-3.png)'} as React.CSSProperties}>
<a href="#lead" className="c-accordion__action">
<div className="c-accordion__content">
<h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">线上工作，咨询</h2>
<p className="c-accordion__description">
Click the appropriate job role below if ....
</p>
</div>
<div className="c-accordion__aside">
<h2 className="c-accordion__title c-accordion__title--hover-hide">Consultant</h2>
</div>
</a>
</li>
<li id="warehouse" className="c-accordion__item" style={{ '--cover': 'url(https://fusion-universal-assets-production.s3.amazonaws.com/file-host/5af42070-0533-49eb-9822-934eebf32cb7--1399798036194765884-/8/Hilti_Warehouse_2024-10.png)'} as React.CSSProperties}>
<a href="#warehouse" className="c-accordion__action">
<div className="c-accordion__content">
<h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">需要搬家，清洁</h2>
<p className="c-accordion__description">
Click on one of the departments below if ....
</p>
</div>
<div className="c-accordion__aside">
<h2 className="c-accordion__title c-accordion__title--hover-hide">Moving,Cleaning</h2>
</div>
</a>
</li>
</ul>
  );
};

export default Adverti;