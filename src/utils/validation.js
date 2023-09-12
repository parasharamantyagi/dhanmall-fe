import {
  strictValidArrayWithMinLength,
  strictValidNumber,
  strictValidString,
} from './common-utils';

export const validateField = (value) => {
  if (strictValidString(value)) {
    return false;
  } else if (strictValidNumber(value)) {
    return false;
  } else if (strictValidArrayWithMinLength(value, 1)) {
    return false;
  } else {
    return true;
  }
};

const validationRuleForCapabilities = [
  ['AMB', 'WC'],
  ['AMB', 'STR'],
  ['WC', 'STR'],
  ['AMB', 'WC', 'STR'],
  ['BAR'],
  ['ISO'],
];

export const checkCapabilityCombination = (names) => {
  const result = validationRuleForCapabilities.some((rule) =>
    rule.every((val, i) => val === names[i]),
  );
  return result;
};
