
export const toString = (dateTimeStr: string): string => {
    let epochtime = Date.parse(dateTimeStr);
    let date = new Date(epochtime);
    return `${date.getFullYear()}年${padding(date.getMonth() + 1)}月${padding(date.getDate())}日${padding(date.getHours())}時${padding(date.getMinutes())}分`;
}

const padding = (num: number): string => {
    return String(num).padStart(2, '0')
}