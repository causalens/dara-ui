import { faBorderAll } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BorderAll icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BorderAll = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBorderAll} {...props} />;
};

export default BorderAll;
