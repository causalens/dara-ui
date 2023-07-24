import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BarsProgress icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BarsProgress = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBarsProgress} {...props} />;
};

export default BarsProgress;
