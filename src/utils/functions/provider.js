import { assignCountryData, assignKeyValues } from "./assignValues";
import { filterObj } from "./filterObj";

export function submitProviderValues(
  state,
  submitCurlValues,
  submitSoapValues,
  submitSmppValues
) {
  return (values) => {
    if (state.request1) {
      submitCurlValues(values, "curl", "add");
    } else if (state.request2) {
      submitSoapValues(values, "soap", "add");
    } else {
      submitSmppValues(values, "smpp", "add");
    }
  };
}

export function handleCurlSubmit(
  uploadedKeys,
  variableDefault,
  state,
  uploadCountries,
  priceAndCountryCode,
  functionType,
  hook
) {
  return (values, type, action) => {
    const payload = {
      name: values.name,
      request: values.curl_request,
      variableDefault: assignKeyValues(uploadedKeys, variableDefault),
      enabled: state.checked,
      priceAndCountryCode: assignCountryData(
        uploadCountries,
        priceAndCountryCode
      ),
      initialResponse: {
        statusPath: values.initial_statusPath,
        messageIdPath: values.initial_messagePath,
      },
      finalResponse: {
        statusPath: hook ? values.final_statusPath : "",
        messageIdPath: hook ? values.final_messagePath : "",
      },
      statusMapping: {
        delivered: state.delivered,
        pending: state.pending,
        undelivered: state.undelivered,
        success: state.success,
        failed: state.failed,
      },
      webhookEnabled: hook
    };
    action === "add"
      ? functionType(type, payload)
      : functionType(type, state.id, payload);
  };
}

export const handleProviderTest = (state, values, functionType, hook) => {
  const uploadedKeys = filterObj(state.addedKeys);
  let variableDefault = {};

  const payload = {
    sender: values.sender,
    destination: values.destination,
    message: values.message,
    request: values.curl_request,
    defaults: assignKeyValues(uploadedKeys, variableDefault),
    initialResponse: {
      statusPath: values.initial_statusPath,
      messageIdPath: values.initial_messagePath,
    },
    finalResponse: {
      statusPath: hook ? values.final_statusPath : "",
      messageIdPath: hook ? values.final_messagePath : "",
    },
    statusMapping: {
      delivered: state.delivered,
      pending: state.pending,
      undelivered: state.undelivered,
      success: state.success,
      failed: state.failed,
    },
    webhookEnabled: hook,
  };
  functionType(payload);
};

export function handleSmppSubmit(
  state,
  uploadCountries,
  priceAndCountryCode,
  functionType
) {
  return (values, type, action) => {
    const payload = {
      name: values.name,
      systemId: values.system_id,
      url: values.url,
      enabled: state.checked,
      password: values.password,
      priceAndCountryCode: assignCountryData(
        uploadCountries,
        priceAndCountryCode
      ),
    };
    action === "add"
      ? functionType(type, payload)
      : functionType(type, state.id, payload);
  };
}

export function handleSoapSubmit(
  uploadedKeys,
  variableDefault,
  state,
  uploadCountries,
  priceAndCountryCode,
  functionType
) {
  return (values, type, action) => {
    const payload = {
      name: values.name,
      request: values.soap_request,
      variableDefault: assignKeyValues(uploadedKeys, variableDefault),
      enabled: state.checked,
      priceAndCountryCode: assignCountryData(
        uploadCountries,
        priceAndCountryCode
      ),
    };
    action === "add"
      ? functionType(type, payload)
      : functionType(type, state.id, payload);
  };
}

export function submitFilterValues(setState, state, filterProviders) {
  return (values) => {
    setState({
      ...state,
      values: values,
    });
    const page = 1;
    const limit = 10;
    const payload = {
      search: values.name,
      country: values.country,
      startDate: values.start_date,
      endDate: values.end_date,
      status: values.status === "Active" ? true : false,
    };
    filterProviders(page, limit, payload);
  };
}

export function paginateFilter(state, filterProviders) {
  return (page, perPage) => {
    let values = state.values;
    const payload = {
      search: values.name,
      country: values.country,
      startDate: values.start_date,
      endDate: values.end_date,
      status: values.status === "Active" ? true : false,
    };
    filterProviders(page, perPage, payload);
  };
}
