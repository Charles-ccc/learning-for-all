/**
 *
 * @param {*} url
 * @returns
 */

function getQuery(url) {
  let decodeUrl = decodeURIComponent(url);
  const str = decodeUrl.slice(decodeUrl.indexOf("?") + 1);
  const arr = str.split("&");
  const query = {};
  for (i = 0; i < arr.length; i++) {
    const item = arr[i].split("=");
    let key = item[0];
    let value = item.slice(1).join("=");
    if (key && value) {
      if (query[key]) {
        query[key] = Array.isArray(query[key])
          ? [...query[key], value]
          : [query[key], value];
      } else {
        query[key] = value;
      }
    }
  }
  return query;
}
getQuery(
  "http://a.bc.com?x=1&y=2&x=3&g=%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F&c=aa=222"
);

function getQueryV2(url) {
  if (!url) return {};
  const paramIndex = url.indexOf("?");
  const paramStr = paramIndex === -1 ? "" : url.substring(paramIndex + 1);
  if (paramStr === "") return {};
  const params = paramStr.split("&").filter((s) => s !== "");

  let results = {};
  for (let p of params) {
    const eqIndex = p.indexOf("=");
    const key = eqIndex === -1 ? "" : param.substring(0, eqIndex).trim();
    if (key === "") continue;

    let val = "";
    if (eqIndex !== -1) {
      val = param.substring(eqIndex + 1);
    }
    const decodedVal = encodeURIComponent(val);

    if (results.hasOwnProperty(key)) {
      result[key].push(decodeVal);
    } else {
      result[key] = [decodedVal];
    }
  }
  return result;
}

function parseUrlGetQuery(url) {
  if (!url) return {};
  const decodedUrl = decodeURIComponent(url);
  const params = decodedUrl.substring(decodedUrl.indexOf("?") + 1);
  const querys = params.split("&");
  let res = {};
  for (let q of querys) {
    const keyVal = q.split("=");
    const key = keyVal[0];
    const val = keyVal.slice(1).join("=");
    if (key && val) {
      if (res[key]) {
        res[key] = Array.isArray(res[key])
          ? [...res[key], val]
          : [res[key], val];
      } else {
        res[key] = val;
      }
    }
  }

  return res;
}
