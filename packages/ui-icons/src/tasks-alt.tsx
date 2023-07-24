import { faTasksAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TasksAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TasksAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTasksAlt} {...props} />;
};

export default TasksAlt;
