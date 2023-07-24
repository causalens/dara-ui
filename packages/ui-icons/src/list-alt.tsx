import { faListAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ListAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ListAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faListAlt} {...props} />;
};

export default ListAlt;
