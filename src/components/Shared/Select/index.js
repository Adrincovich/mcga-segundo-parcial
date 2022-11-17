import React from 'react';
import styles from './select.module.css';

const Select = ({ disabled, id, nameRegister,register, onChange, requiredMany, placeholder, type, value }) => {
  return (
    <div className={styles.selectWrapper}>
      <select
        className={`${disabled && styles.disabled} ${styles.select}`}
        disabled={disabled}
        id={id}
        {...register(nameRegister, requiredMany)}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      >
        <option value="computers">Computadora</option>
        <option value="phones">Celulares</option>
        <option value="accesories">Accesorios</option>
      </select>
    </div>
  );
};

export default Select;