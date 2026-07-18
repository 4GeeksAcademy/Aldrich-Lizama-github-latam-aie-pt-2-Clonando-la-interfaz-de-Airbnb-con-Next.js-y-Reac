interface HostInfoProps {
  hostName: string;
  hostAvatar: string;
  hostYears: number;
}

const HostInfo: React.FC<HostInfoProps> = ({ hostName, hostAvatar, hostYears }) => {
  return (
    <div className="flex items-center gap-4 border-b border-gray-200 pb-6">
      <div className="h-14 w-14 overflow-hidden rounded-full bg-gray-200">
        {hostAvatar ? (
          <img
            src={hostAvatar}
            alt={hostName}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#ff385c] text-lg font-bold text-white">
            {hostName.charAt(0)}
          </div>
        )}
      </div>
      <div>
        <p className="font-semibold text-gray-900">Anfitrión: {hostName}</p>
        <p className="text-sm text-gray-500">{hostYears} años de experiencia</p>
      </div>
    </div>
  );
};

export default HostInfo;