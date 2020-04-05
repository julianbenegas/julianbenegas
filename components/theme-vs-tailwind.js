export default () => {
  return (
    <>
      {/* Normal */}
      <div className="h-screen min-w-7 w-7 bg-gray-100 flex justify-start items-center flex-column pt-4" />
      <div
        sx={{
          height: '100vh',
          minWidth: 7,
          width: 7,
          bg: 'gray.4',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
          pt: 4
        }}
      />
      {/* One offs */}
      <div /> Go extend your theme
      <div sx={{ someCssProp: '326px' }} /> Handles it perfectly
      {/* Dynamic */}
      <div className={`${dynamic ? 'bg-grey-100' : 'bg-grey-900'}`} />
      <div sx={{ bg: dynamic ? 'grey.0' : 'grey.8' }} />
      {/* Functional */}
      <div
        className={(function () {
          // Some calculations here
          return 'w-7'
        })()}
      />
      <div
        sx={{
          width: (theme) => {
            // Some calculations here
            return 7
          }
        }}
      />
    </>
  )
}
