import { addZeroes } from "./addDecimals";

/* eslint-disable no-sequences */
export const assignCountryData = (data, allFiles) => {
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const each = Object.assign({
        price:
          data[i].country_currency &&
          addZeroes(data[i].country_currency) &&
          addZeroes(data[i].country_currency).toString(),
        countryCode: data[i].country_code,
      });
      allFiles && allFiles.push(each);
    }
    return allFiles;
  }
};

export const assignKeyValues = (data, result) => {
  if (data && data.length > 0) {
    result = data.reduce(
      (item, { key, value }) => ((item[key] = value), item),
      {}
    );
  }
  return result;
};

export const assignRoleData = (data, allFiles) => {
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const each = Object.assign({
        value: data[i].id,
        label:
          data[i].role === "maker"
            ? "Maker"
            : data[i].role === "checker"
            ? "Checker"
            : data[i].role === "viewer"
            ? "Viewer"
            : data[i].role,
      });
      allFiles.push(each);
    }

    return allFiles;
  }
};

export const assignSuccessCount = (data) => {
  let successCount = [];
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const each = data[i].successCount;
      successCount.push(each);
    }
    return successCount;
  }
};

export const assignFailureCount = (data) => {
  let failureCount = [];
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const each = data[i].failureCount;
      failureCount.push(each);
    }
    return failureCount;
  }
};

export const assignChartLabel = (data) => {
  let chartLabel = [];
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const each = data[i].x;
      chartLabel.push(each);
    }
    return chartLabel;
  }
};

export const assignDonutLabels = (data) => {
  let donutLabels = [];
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const each = data[i].name;
      donutLabels.push(each);
    }
    return donutLabels;
  }
};

export const assignDonutData = (data) => {
  let donutData = [];
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const each = data[i].sent;
      donutData.push(each);
    }
    return donutData;
  }
};

export const assignMetricsData = (data, allFiles) => {
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const each = Object.assign({
        name: data[i].name,
        count: data[i].sent,
        percent: data[i].percentage,
        color:
          i === 0
            ? "#B9CFF9"
            : i === 1
            ? "#5B8EF0"
            : i === 2
            ? "#2C6EEC"
            : i === 3
            ? "#0F42A4"
            : "#0E347E",
      });
      allFiles.push(each);
    }
    return allFiles;
  }
};

export const assignRankingData = (data, allFiles) => {
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const each = Object.assign({
        rank: i + 1 && Number(i + 1),
        id: data[i].id,
      });
      allFiles && allFiles.push(each);
    }
    return allFiles;
  }
};

export const assignCountryData2 = (data, allFiles) => {
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const each = Object.assign({
        country_code: data[i].country_code,
        country_currency: data[i].price,
      });
      allFiles && allFiles.push(each);
    }
    return allFiles;
  }
};

export const assignKeyValues2 = (data) => {
  let obj = data && JSON.parse(data);
  let result = Object.keys(obj).map((key) =>
    Object.assign({ key: key, value: obj[key] })
  );
  return result;
};

export function updateState(setState, state, data) {
  const countryArray = [];
  setState({
    ...state,
    id: data && data.data && data.data.id,
    checked: data && data.data && data.data.enabled,
    request: data && data.data && data.data.request,
    selectedCountries:
      data &&
      data.data &&
      data.data.meta &&
      assignCountryData2(data.data.meta, countryArray),
    addedKeys:
      data &&
      data.data &&
      data.data.variable_default &&
      assignKeyValues2(data.data.variable_default),
    url: data && data.data && data.data.url,
    delivered:
      data &&
      data.data &&
      data.data.responseMapping &&
      data.data.responseMapping.delivered,
    success:
      data &&
      data.data &&
      data.data.responseMapping &&
      data.data.responseMapping.success,
    undelivered:
      data &&
      data.data &&
      data.data.responseMapping &&
      data.data.responseMapping.undelivered,
    pending:
      data &&
      data.data &&
      data.data.responseMapping &&
      data.data.responseMapping.pending,
    failed:
      data &&
      data.data &&
      data.data.responseMapping &&
      data.data.responseMapping.failed,
    initial_status_path: data && data.data && data.data.initial_status_path,
    initial_message_id_path:
      data && data.data && data.data.initial_message_id_path,
    final_status_path: data && data.data && data.data.final_status_path,
    final_message_id_path: data && data.data && data.data.final_message_id_path,
    system_id: data && data.data && data.data.system_id,
    password: data && data.data && data.data.password,
    webHookUrl: data && data.data && data.data.webhookUrl,
    addHook: data && data.data && data.data.webhook_enabled,
    noHook:
      data && data.data && data.data.webhook_enabled === false ? true : false,
  });
}
