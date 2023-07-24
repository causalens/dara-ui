import { faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TrashCanArrowUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TrashCanArrowUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrashCanArrowUp} {...props} />;
};

export default TrashCanArrowUp;
