import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TrashArrowUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TrashArrowUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrashArrowUp} {...props} />;
};

export default TrashArrowUp;
