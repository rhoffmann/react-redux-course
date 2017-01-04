import React from 'react';
import cx from 'classnames';

export const renderField = ({ input, label, type, meta: { touched, error, warning, valid } }) => (
  <div className={cx('form-group', {
      'has-danger': touched && error,
      'has-warning': touched && warning,
      'has-success': touched && valid
    })}>
    <label>{label}</label>
    <input {...input} className={cx('form-control')} placeholder={label} type={type}/>
    {touched && ((error && <span className="help-block">{error}</span>) || (warning && <span className="help-block">{warning}</span>))}
  </div>
);
