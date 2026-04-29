type RowError = {
  error_row?: string | number;
  error_msg?: string;
};

type BusinessErrorResponse = {
  success?: boolean;
  errorMsg?: RowError[];
};

const digitText = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

const formatChineseNumber = (value: string | number | undefined) => {
  const num = Number(value);
  if (!Number.isInteger(num) || num <= 0 || num >= 100) {
    return value || '';
  }
  if (num < 10) {
    return digitText[num];
  }
  if (num === 10) {
    return '十';
  }
  if (num < 20) {
    return `十${digitText[num % 10]}`;
  }
  const ten = Math.floor(num / 10);
  const unit = num % 10;
  return `${digitText[ten]}十${unit ? digitText[unit] : ''}`;
};

export const formatRowErrorMessages = (response: BusinessErrorResponse) => {
  if (response?.success !== false || !Array.isArray(response.errorMsg) || response.errorMsg.length === 0) {
    return '';
  }

  return response.errorMsg
    .map((item) => {
      const row = formatChineseNumber(item.error_row);
      const prefix = row ? `第${row}行数据错误` : '数据错误';
      return `${prefix}：${item.error_msg || '请检查数据'}`;
    })
    .join('\n');
};
