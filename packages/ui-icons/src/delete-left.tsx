import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DeleteLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DeleteLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDeleteLeft} {...props} />;
};

export default DeleteLeft;
