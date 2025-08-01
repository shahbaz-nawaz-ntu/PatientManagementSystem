import InputDropDown from '../components/InputDropDown'


function VisionandRefraction() {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-6">
  <input
    type="text"
    placeholder="VA (R)"
    className="p-2 border border-gray-300 rounded"
  />
  <InputDropDown name="NA" />
</div>

    
  );
};

export default VisionandRefraction;