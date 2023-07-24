import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Edit icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Edit = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEdit} {...props} />;
};

export default Edit;
