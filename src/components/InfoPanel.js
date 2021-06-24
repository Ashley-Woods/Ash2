import { useObserver } from "mobx-react-lite";
import { useStores } from "../stores/index";

export default function InfoPanel() {
  const { mapStore } = useStores();

  return useObserver(() => (
    <div>
      <h2> Map Info </h2>
      Zoom = {mapStore.zoom}
    </div>
  ));
}
