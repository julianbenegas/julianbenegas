export const oneOff = (key: string, value: string | number) => {
  const themeKey = `${key}OneOffs`
  return (theme: any) => theme?.[themeKey]?.[value]
}
