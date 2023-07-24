import { faBacon } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bacon icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bacon = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBacon} {...props} />;
};

export default Bacon;
