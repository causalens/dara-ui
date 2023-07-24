import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ScrewdriverWrench icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ScrewdriverWrench = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faScrewdriverWrench} {...props} />;
};

export default ScrewdriverWrench;
