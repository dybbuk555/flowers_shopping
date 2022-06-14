/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from "@heroicons/react/solid";
import { NotificationsType } from "../lib/types";

const NotificationComponent = ({content, color}: NotificationsType ) => {
  return (
    <div className={`rounded-md bg-${color}-50 p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className={`h-5 w-5 text-${color}-400`}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium text-${color}-800`}>
           {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
